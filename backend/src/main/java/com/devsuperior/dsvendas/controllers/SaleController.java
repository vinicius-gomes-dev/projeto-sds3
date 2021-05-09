package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SaleSuccessTaxDTO;
import com.devsuperior.dsvendas.dto.SaleSumDTO;
import com.devsuperior.dsvendas.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	
	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable){
		Page<SaleDTO> sellers = service.findAll(pageable);
		
		return ResponseEntity.ok(sellers);
	}

	@GetMapping(value = "amount-by-seller")
	public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller(){
		List<SaleSumDTO> sellers = service.amountGroupedBySeller();
		
		return ResponseEntity.ok(sellers);
	}
	
	@GetMapping(value = "success-tax-by-seller")
	public ResponseEntity<List<SaleSuccessTaxDTO>> successTaxGroupedBySeller(){
		List<SaleSuccessTaxDTO> sellers = service.successTaxGroupedBySeller();
		
		return ResponseEntity.ok(sellers);
	}
}
