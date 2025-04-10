package com.expense_tracker.expense.service;

import com.expense_tracker.expense.model.ExpenseModel;
import com.expense_tracker.expense.repository.ExpenseRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class ExpenseService {

    private final ExpenseRepository expenseRepository;

    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public List<ExpenseModel> getAllExpenses() {
        return expenseRepository.findAll();
    }

    public Optional<ExpenseModel> getExpenseById(String id) {
        return expenseRepository.findById(id);
    }

    public ExpenseModel addExpense(ExpenseModel expense) {
        return expenseRepository.save(expense);
    }

    public ExpenseModel updateExpense(String id, ExpenseModel updatedExpense) {
        return expenseRepository.findById(id).map(existingExpense -> {
            updatedExpense.setId(id);
            return expenseRepository.save(updatedExpense);
        }).orElse(null);
    }

    public void deleteExpense(String id) {
        if (expenseRepository.existsById(id)) {
            expenseRepository.deleteById(id);
        } else {
            log.warn("Attempted to delete non-existing expense with ID: {}", id);
        }
    }
}
