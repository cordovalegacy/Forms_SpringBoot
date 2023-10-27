package com.springboot.server.service;
import com.springboot.server.model.FormModel;
import org.springframework.stereotype.Service;

@Service
public class FormService {

    public FormModel saveForm(FormModel formModel){
        System.out.println("Submission in Service");
        System.out.println(formModel.getRandNum());
        return formModel;
    }

    public FormModel getForm(FormModel formModel){
        System.out.println(formModel);
        return formModel;
    }

}
