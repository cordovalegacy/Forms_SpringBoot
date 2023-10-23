package com.springboot.server.controller;

import com.springboot.server.model.FormModel;
import com.springboot.server.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class FormController {

    @Autowired
    private FormService formService;

    @PostMapping("/omikuji")


    public String add(@RequestBody FormModel formModel){
        System.out.println(formModel);
        formService.saveForm(formModel);
        return "Successful Form Submission";
    }



}
