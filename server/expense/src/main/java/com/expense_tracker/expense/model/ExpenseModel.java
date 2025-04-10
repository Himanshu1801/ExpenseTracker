package com.expense_tracker.expense.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "expenses")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExpenseModel {
    
    @Id
    private String id;
    private String name;
    private Double amount;
    private String date;
}
