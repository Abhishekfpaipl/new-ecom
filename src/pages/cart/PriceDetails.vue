<template>
  <div class="bg-light p-3">
    <div class="d-flex justify-content-between py-2">
      <span class="fw-bold">Subtotal:</span>
      <span>₹ {{ getCartSummary }}</span>
    </div>

    <div class="d-flex justify-content-between py-2">
      <span class="fw-bold">GST (18%):</span>
      <span>₹ {{ gstAmount }}</span>
    </div>

    <div class="d-flex justify-content-between py-2">
      <span class="fw-bold">Grand Total:</span>
      <span>₹ {{ grandTotalWithGSTAndAmount }}</span>
    </div>
  </div>
</template>

<script>
export default {
 props:['getCartSummary','gstAmount','grandTotalWithGSTAndAmount']
}
</script>

<style lang="scss" scoped></style>