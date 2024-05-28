package net.javaguides.todo.controller;

import lombok.AllArgsConstructor;
import net.javaguides.todo.dto.JwtAuthResponse;
import net.javaguides.todo.dto.LoginDto;
import net.javaguides.todo.dto.RegisterDto;
import net.javaguides.todo.entity.User;
import net.javaguides.todo.service.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {
    private AuthService authService;

//    public AuthController(AuthService authService) {
//        this.authService = authService;
//    }

    //builder Register REST API
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegisterDto registerDto) {
        String response = authService.register(registerDto);
        return  new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    //builder Login REST API
    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody LoginDto loginDto){
    public ResponseEntity<JwtAuthResponse> login(@RequestBody LoginDto loginDto){
//        String token = authService.login(loginDto);
         JwtAuthResponse jwtAuthResponse = authService.login(loginDto);

//        JwtAuthResponse jwtAuthResponse = new JwtAuthResponse();
//        jwtAuthResponse.setAccessToken(token);

//        return new ResponseEntity<>(response, HttpStatus.CREATED);//201 created
        return new ResponseEntity<>(jwtAuthResponse, HttpStatus.OK); //200 ok
    }

}
