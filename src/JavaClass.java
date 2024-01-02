package ca.devpro.timesheet.api;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;
import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
@Accessors(chain = true)
public class InvoiceListDto {
	private List<InvoiceDto> invoices;
	private String listName;
}

@Data
@Accessors(chain = true)
public class InvoiceDto {
	private UUID invoiceId;
	private UUID vendorId;
	private LocalDate startDate;
	private LocalDate endDate;
	private InvoiceStatusDto status;
	private String createdBy;
	private String description;
    private String customerName;
    private String customerEmail;
    private String billingAddress;
    private String shippingAddress;
    private String itemQuantity;
    private String itemPrice;
    private String totalAmount;
	private List<InvoiceHistoryDto> histories;
	private Boolean outOfSync;
	private Boolean locked;
}

@Data
@Accessors(chain = true)
public class InvoiceHistoryDto {
	private UUID invoiceId;
	private UUID snapshotId;
	private String createdBy;
}