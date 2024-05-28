package net.javaguides.todo.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "todos")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Column(name = "title", nullable = false)
    @Column(nullable = false)//默认创建数据表中列名为title
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(nullable = false)
    private boolean completed;
}
