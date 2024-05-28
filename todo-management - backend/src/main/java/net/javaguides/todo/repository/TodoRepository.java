package net.javaguides.todo.repository;

import net.javaguides.todo.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
//传递2个参数 Todo class 以及id