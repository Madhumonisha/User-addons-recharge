package com.userplan.project.controller;


import com.userplan.project.model.User;
import com.userplan.project.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/addon-plan")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUserPlan(){
        List<User> userPlans= userService.findAllUserPlan();
        return new ResponseEntity<>(userPlans, HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/find/{id}")
    public ResponseEntity<User> getUserPlanById(@PathVariable("id") Long id){
        User userPlan= userService.findUserPlanById(id);
        return new ResponseEntity<>(userPlan, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUserPlan(@RequestBody User user){
        User newUserPlan = userService.addUserPlan(user);
        return new ResponseEntity<>(newUserPlan, HttpStatus.CREATED);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUserPlan(@PathVariable("id") Long id,@RequestBody User user){
        User updatePlan = userService.updateUserPlan(user);
        return new ResponseEntity<>(updatePlan, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUserPlan(@PathVariable("id") Long id){
        userService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
