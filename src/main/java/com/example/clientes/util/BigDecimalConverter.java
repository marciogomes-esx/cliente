package com.example.clientes.util;

import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class BigDecimalConverter {
    public BigDecimal converter(String value) {
        if (value == null) {
            return null;
        }
        value = value.replace(",", ".");
        return new BigDecimal(value);
    }
}
