package io.eCommerce.repository;

import io.eCommerce.model.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

public interface ItemRepository extends JpaRepository<Item, Long> {

    @RestResource(path = "category")
    Page<Item> findByCategoryId(@Param("id") Long id, Pageable pageable);

    @RestResource(path = "keyword")
    Page<Item> findByNameContaining(@Param("name") String keyword, Pageable pageable);
}
