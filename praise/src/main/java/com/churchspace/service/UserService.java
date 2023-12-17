package com.churchspace.service;

import java.util.List;
import javax.security.auth.login.AccountNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.churchspace.entity.User;
import com.churchspace.repo.UserRepo;

@Service
public class UserService {


@Autowired
UserRepo userRepo;

public User save(User user) {
    return userRepo.save(user);
}

public User update(User user) throws Exception {	
    if(user.getId() != null) {
        return userRepo.save(user);
    }
    throw new AccountNotFoundException("Account does not exist! id not present");
}

public User findById(Integer userId) throws Error {

    if(userRepo.findById(userId).isPresent()) {
        return userRepo.findById(userId).get();
    }
    
    throw new Error("No user id present, User not found");
    
}

public List<User> findByEmail(String email) {
	return userRepo.findByEmail(email);
}

public User findMeByEmail(String email) {
	return userRepo.findMeByEmail(email);
}

public User findByUsername (String userName)throws UsernameNotFoundException{
	User user = userRepo.findByUsername(userName).orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + userName));
	return user;
}

public boolean existsByEmail(String email) {
	
	return userRepo.existsByEmail(email);
}

public boolean existsByUsername(String email) {
	
	return userRepo.existsByUsername(email);
}

public List<User> findAll() {
	return userRepo.findAll();
}

  }

