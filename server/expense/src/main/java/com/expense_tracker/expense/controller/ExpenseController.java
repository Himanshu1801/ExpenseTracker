package com.expense_tracker.expense.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.expense_tracker.expense.model.ExpenseModel;
import com.expense_tracker.expense.service.ExpenseService;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin("*")
@Slf4j
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping
    public String home() {
        return "Expense Tracker API is running";
    }

    @GetMapping("/expenses")
    public ResponseEntity<List<ExpenseModel>> getAllExpenses() {
        List<ExpenseModel> expenses = expenseService.getAllExpenses();
        return ResponseEntity.ok(expenses);
    }

    @GetMapping("/expenses/{id}")
    public ResponseEntity<ExpenseModel> getExpenseById(@PathVariable String id) {
        return expenseService.getExpenseById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ExpenseModel> addExpense(@RequestBody ExpenseModel expense) {
        ExpenseModel savedExpense = expenseService.addExpense(expense);
        return ResponseEntity.ok(savedExpense);
    }

    @PutMapping("/expenses/{id}")
    public ResponseEntity<ExpenseModel> updateExpense(@PathVariable String id, @RequestBody ExpenseModel updatedExpense) {
        ExpenseModel expense = expenseService.updateExpense(id, updatedExpense);
        return (expense != null) ? ResponseEntity.ok(expense) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/expenses/{id}")
    public ResponseEntity<Void> deleteExpense(@PathVariable String id) {
        expenseService.deleteExpense(id);
        return ResponseEntity.noContent().build();
    }
}
