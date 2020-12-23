package io.eCommerce.repository;

import io.eCommerce.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface ItemRepository extends JpaRepository<Item, Long> {

}
