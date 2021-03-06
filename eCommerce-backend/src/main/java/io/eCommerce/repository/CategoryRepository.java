package io.eCommerce.repository;

import io.eCommerce.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

//@RepositoryRestResource(collectionResourceRel = "itemCategory", path = "item-category")
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
