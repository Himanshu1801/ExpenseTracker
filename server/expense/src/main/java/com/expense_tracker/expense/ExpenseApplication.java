package com.expense_tracker.expense;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class ExpenseApplication {

	public static void main(String[] args) {
		// Load the .env file
        Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
        System.setProperty("MONGO_URI", dotenv.get("MONGO_URI"));
		SpringApplication.run(ExpenseApplication.class, args);
	}
}
