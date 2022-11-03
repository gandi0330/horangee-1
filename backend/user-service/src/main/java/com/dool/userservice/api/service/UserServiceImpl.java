package com.dool.userservice.api.service;

import com.dool.userservice.api.request.BuyBackgroundRequest;
import com.dool.userservice.api.request.CreateUserRequest;
import com.dool.userservice.db.domain.Background;
import com.dool.userservice.db.domain.User;
import com.dool.userservice.db.domain.UserBackground;
import com.dool.userservice.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService{


    private final UserRepository userRepository;
    private final UserBackgroundService userBackgroundService;
    private final BackgroundService backgroundService;

    @Override
    public User getUser(String id) {
        return userRepository.get(id);
    }

    @Override
    public User createUser(CreateUserRequest request) {
        User user = new User(request.getId(), request.getPassword());
        userRepository.create(user);

        return userRepository.get(user.getId());
    }

    @Override
    public void deleteUser(String id) {

        userRepository.delete(id);
    }

    @Override
    public void buyBackground(BuyBackgroundRequest request){
        User user = userRepository.get(request.getUserId());

        Background background = backgroundService.get(request.getBackgroundId());
        if(user.getPoint() >= background.getPrice()){
            userBackgroundService.createUserBackground(request);
            user.setPoint(user.getPoint() - background.getPrice());
        }
    }

    @Override
    public void logoutUser() {

    }
}
