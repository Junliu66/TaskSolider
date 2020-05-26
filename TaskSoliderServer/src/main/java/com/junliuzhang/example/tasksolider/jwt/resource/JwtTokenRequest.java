package com.junliuzhang.example.tasksolider.jwt.resource;

import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqdW5saXU2NiIsImV4cCI6MTU5MTA3ODU3MCwiaWF0IjoxNTkwNDczNzcwfQ.LT562XHLr_VbDX1KffiiZPMEyH0W7i89We729XSD75UF1KDwHnr4Xbq0lZlX1QUON0CjMZDsXQDeoaxk8DDQbw"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
