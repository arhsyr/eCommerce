package io.eCommerce.model;

import lombok.Data;
import lombok.Generated;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Data
@ToString
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String sku;
    private String name;
    private String description;
    private BigDecimal price;
    private String imageUrl;
    private boolean active;
    private int unitInStock;
    private Date createdOn;
    private Date updateOn;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_Id", nullable = false)
    private Category category;

}
