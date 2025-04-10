package com.expense_tracker.expense.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.expense_tracker.expense.model.ExpenseModel;

public interface ExpenseRepository extends MongoRepository<ExpenseModel, String> {}
