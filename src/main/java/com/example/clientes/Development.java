package com.example.clientes;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
@Configuration
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Profile("Development")
public @interface Development {

}
