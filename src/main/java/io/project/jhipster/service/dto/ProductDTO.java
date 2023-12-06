package io.project.jhipster.service.dto;

import java.time.LocalDate;

public class ProductDTO {
    private String name;
    private Double minPrice;
    private Double maxPrice;
    private Integer quantityUpTo;
    private LocalDate publishDateFrom;
    private LocalDate publishDateTo;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getMinPrice() {
        return minPrice;
    }

    public void setMinPrice(Double minPrice) {
        this.minPrice = minPrice;
    }

    public Double getMaxPrice() {
        return maxPrice;
    }

    public void setMaxPrice(Double maxPrice) {
        this.maxPrice = maxPrice;
    }

    public Integer getQuantityUpTo() {
        return quantityUpTo;
    }

    public void setQuantityUpTo(Integer quantityUpTo) {
        this.quantityUpTo = quantityUpTo;
    }

    public LocalDate getPublishDateFrom() {
        return publishDateFrom;
    }

    public void setPublishDateFrom(LocalDate publishDateFrom) {
        this.publishDateFrom = publishDateFrom;
    }

    public LocalDate getPublishDateTo() {
        return publishDateTo;
    }

    public void setPublishDateTo(LocalDate publishDateTo) {
        this.publishDateTo = publishDateTo;
    }

    public ProductDTO() {
    }

    public ProductDTO(String name, Double minPrice, Double maxPrice, Integer quantityUpTo, LocalDate publishDateFrom, LocalDate publishDateTo) {
        this.name = name;
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        this.quantityUpTo = quantityUpTo;
        this.publishDateFrom = publishDateFrom;
        this.publishDateTo = publishDateTo;
    }

    @Override
    public String toString() {
        return "ProductDTO{" +
            "name='" + name + '\'' +
            ", minPrice=" + minPrice +
            ", maxPrice=" + maxPrice +
            ", quantityUpTo=" + quantityUpTo +
            ", publishDateFrom=" + publishDateFrom +
            ", publishDateTo=" + publishDateTo +
            '}';
    }
}
