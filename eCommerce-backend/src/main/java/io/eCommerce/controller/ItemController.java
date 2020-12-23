package io.eCommerce.controller;

import io.eCommerce.model.Item;
import io.eCommerce.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/v1")
public class ItemController {

    @Autowired
    private ItemRepository itemRepository;

    // create new item
    @PostMapping("/items")
    public Item createMember(@RequestBody Item newItem) {
        return itemRepository.save(newItem);
    }
}
