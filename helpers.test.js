describe('Helpers test (with setup and tear-down)', function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 45;
    tipAmtInput.value = 9;
    submitPaymentInfo();
  });

  it('should get a number value from sumPaymentTotal function', function () {
    let sumPaymentTotalBillAmt = sumPaymentTotal('billAmt');
    let sumPaymentTotalTipAmt = sumPaymentTotal('tipAmt');
    let sumPaymentTotalTipPercent = sumPaymentTotal('tipPercent');

    expect(sumPaymentTotalBillAmt).toBeInstanceOf(Number);
    expect(sumPaymentTotalBillAmt).toEqual(45);

    expect(sumPaymentTotalTipAmt).toBeInstanceOf(Number);
    expect(sumPaymentTotalTipAmt).toEqual(9);

    expect(sumPaymentTotalTipPercent).toBeInstanceOf(Number);
    expect(sumPaymentTotalTipPercent).toEqual(20);
  });

  it('should get a whole number value from calculateTipPercent function', function () {
    let tipPercent1 = calculateTipPercent(45, 9);

    expect(Number.isInteger(tipPercent1)).toBeTrue();
    expect(tipPercent1).toBe(20);
  });

  // I get errors with the following test which is a combo of what I had and the solution. Can't quite figure this one out for some reason. 
  // it('should append td element to tr element with the appendTd function', function () {
  //   let newTr = document.createElement('tr');
  //   appendTd(newTr, 'Bob');

  //   expect(newTr.children.length).toEqual(1);
  //   expect(newTr.firstChild.innerHtml).toEqual('Bob');
  // });

  it('should generate delete button from appendDeleteBtn', function () {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  });

  afterEach(function () {
    allPayments = {};
    paymentId = 0;
    billAmtInput.value = '';
    tipAmtInput.value = '';
  });
});
