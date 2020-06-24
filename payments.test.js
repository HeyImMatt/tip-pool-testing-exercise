describe('Payments test (with setup and tear-down)', function () {
  let summaryTable = document.querySelector('#summaryTable tbody');

  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 45;
    tipAmtInput.value = 9;
  });

  it('should test submitPaymentInfo function', function () {
    submitPaymentInfo();
    expect(allPayments.payment1.billAmt).toBe('45');
    expect(allPayments.payment1.tipAmt).toBe('9');
    expect(allPayments.payment1.tipPercent).toBe(20);
  });

  it('should return a payment object from createCurPayment', function () {
    expect(createCurPayment()).toEqual({
      billAmt: '45',
      tipAmt: '9',
      tipPercent: 20,
    });
  });

  it('should create a tr with payment info from appendPaymentTable', function () {
    submitPaymentInfo();
    expect(paymentTbody.firstElementChild.firstElementChild.textContent).toBe('$45');
    expect(paymentTbody.firstElementChild.firstElementChild.nextSibling.textContent).toBe('$9');
    expect(paymentTbody.firstElementChild.lastElementChild.previousSibling.textContent).toBe('20%');
    expect(paymentTbody.firstElementChild.lastElementChild.textContent).toBe('X');
  });

  it('should update the summary table with updateSummary', function () {
    submitPaymentInfo();
    expect(summaryTable.firstElementChild.firstElementChild.textContent).toBe('$45');
    expect(summaryTable.firstElementChild.firstElementChild.nextSibling.nextSibling.textContent).toBe('$9');
    expect(summaryTable.firstElementChild.lastElementChild.textContent).toBe('20%');
  });


  afterEach(function () {
    allPayments = {};
    paymentId = 0;
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.remove('tr');
    summaryTable.remove('tr');
  });
});
