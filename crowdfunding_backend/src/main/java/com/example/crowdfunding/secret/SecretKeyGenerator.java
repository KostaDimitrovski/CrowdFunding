package com.example.crowdfunding.secret;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class SecretKeyGenerator {
    public static void main(String[] args) {
        try {
            KeyGenerator keyGenerator = KeyGenerator.getInstance("HmacSHA256");
            SecretKey secretKey = keyGenerator.generateKey();
            byte[] keyBytes = secretKey.getEncoded();
            String base64Key = Base64.getEncoder().encodeToString(keyBytes);
            System.out.println("Generated Secret Key: " + base64Key);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }
}
