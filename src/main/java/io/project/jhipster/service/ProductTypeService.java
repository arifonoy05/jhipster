package io.project.jhipster.service;

import io.project.jhipster.domain.ProductType;
import io.project.jhipster.repository.ProductTypeRepository;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link ProductType}.
 */
@Service
@Transactional
public class ProductTypeService {

    private final Logger log = LoggerFactory.getLogger(ProductTypeService.class);

    private final ProductTypeRepository productTypeRepository;

    public ProductTypeService(ProductTypeRepository productTypeRepository) {
        this.productTypeRepository = productTypeRepository;
    }

    /**
     * Save a productType.
     *
     * @param productType the entity to save.
     * @return the persisted entity.
     */
    public ProductType save(ProductType productType) {
        log.debug("Request to save ProductType : {}", productType);
        return productTypeRepository.save(productType);
    }

    /**
     * Update a productType.
     *
     * @param productType the entity to save.
     * @return the persisted entity.
     */
    public ProductType update(ProductType productType) {
        log.debug("Request to update ProductType : {}", productType);
        return productTypeRepository.save(productType);
    }

    /**
     * Partially update a productType.
     *
     * @param productType the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<ProductType> partialUpdate(ProductType productType) {
        log.debug("Request to partially update ProductType : {}", productType);

        return productTypeRepository
            .findById(productType.getId())
            .map(existingProductType -> {
                if (productType.getName() != null) {
                    existingProductType.setName(productType.getName());
                }
                if (productType.getCategory() != null) {
                    existingProductType.setCategory(productType.getCategory());
                }

                return existingProductType;
            })
            .map(productTypeRepository::save);
    }

    /**
     * Get all the productTypes.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<ProductType> findAll(Pageable pageable) {
        log.debug("Request to get all ProductTypes");
        return productTypeRepository.findAll(pageable);
    }

    /**
     * Get one productType by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<ProductType> findOne(Long id) {
        log.debug("Request to get ProductType : {}", id);
        return productTypeRepository.findById(id);
    }

    /**
     * Delete the productType by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete ProductType : {}", id);
        productTypeRepository.deleteById(id);
    }
}
