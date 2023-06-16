package com.churchspace.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.churchspace.entity.ERole;
import com.churchspace.entity.Role;
import com.churchspace.repo.RoleRepo;

import java.util.Optional;

@Service
public class RoleService {

    @Autowired
    RoleRepo roleRepo;

    public Optional<Role> findByName(ERole roleName) {
        return roleRepo.findByName(roleName);
    }
    
    public Optional<Role> findByName(String roleName) {
    	Role role = new Role (roleName);
    	
        return roleRepo.findByName(role.getName());
    }
}