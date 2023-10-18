package com.example.clientes.rest;

import com.example.clientes.rest.exception.ApiErros;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import javax.naming.Binding;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RestControllerAdvice
public class ApplicationControllerAdivice {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiErros handleValidationErros(MethodArgumentNotValidException ex){
        BindingResult bindingResult = ex.getBindingResult();
        List<String> message = bindingResult.getAllErrors()
                .stream().map(objectError -> objectError.getDefaultMessage())
                .collect(Collectors.toList());
        return new ApiErros(message);
    }

    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity handleResponseStatusException(ResponseStatusException ex){
        String messagemErro = ex.getMessage();
        HttpStatus codigoStatus = (HttpStatus) ex.getStatusCode();
    ApiErros apiErros = new ApiErros(messagemErro);
    return new ResponseEntity(apiErros, codigoStatus);
    }

}
