package io.project.jhipster.repository;

import io.project.jhipster.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

/**
 * Spring Data JPA repository for the Product entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product> {

//    @Query(value = "SELECT p FROM Product p WHERE ( p.name IS NULL OR LOWER(p.name) = LOWER(:#{#product.name}) ) ")
//    Page<Product> searchProduct(@Param("product") Product product, Pageable pageable);
//    "(:name IS NULL OR LOWER(name) LIKE LOWER(CONCAT('%', :name, '%')))

    @Query(value = "SELECT p FROM Product p WHERE ( p.name IS NULL OR LOWER(p.name) LIKE LOWER( CONCAT('%', :name ,'%')) ) " +
        "AND ( p.price IS NULL OR :minPrice IS NULL OR :maxPrice IS NULL OR p.price BETWEEN :minPrice AND :maxPrice ) " +
        "AND ( p.quantity IS NULL OR p.quantity > :quantityUpTo ) " +
        "AND (  ( :publishDateFrom IS NULL OR :publishDateTo IS NULL ) OR ( p.publishDate BETWEEN :publishDateFrom AND :publishDateTo ) ) ORDER BY p.publishDate desc"
    )
    Page<Product> findAllBySearchParam(
        @Param("name") String name,
        @Param("minPrice") Double minPrice,
        @Param("maxPrice") Double maxPrice,
        @Param("quantityUpTo") Integer quantityUpTo,
        @Param("publishDateFrom") LocalDate publishDateFrom,
        @Param("publishDateTo") LocalDate publishDateTo,
        Pageable pageable);
}
