package com.churchspace.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.churchspace.entity.ERole;
import com.churchspace.entity.Role;

public interface RoleRepo extends JpaRepository<Role, Integer> {
	
	Optional<Role> findByName(ERole name);

}
