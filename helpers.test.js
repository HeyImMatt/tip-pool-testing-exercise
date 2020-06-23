describe('Helpers test (with setup and tear-down)', function () {
  beforeEach(function () {
    // initialization logic
    allPayments = {
      payment1: {
        billAmt: 45,
        tipAmt: 9,
        tipPercent: 20,
      },
      payment2: {
        billAmt: 20,
        tipAmt: 2,
        tipPercent: 10,
      },
    };
  });

  it('should get a number value from sumPaymentTotal function', function () {
    let sumPaymentTotalBillAmt = sumPaymentTotal('billAmt');
    let sumPaymentTotalTipAmt = sumPaymentTotal('tipAmt');
    let sumPaymentTotalTipPercent = sumPaymentTotal('tipPercent');

    expect(sumPaymentTotalBillAmt).toBeInstanceOf(Number);
    expect(sumPaymentTotalBillAmt).toEqual(65);

    expect(sumPaymentTotalTipAmt).toBeInstanceOf(Number);
    expect(sumPaymentTotalTipAmt).toEqual(11);

    expect(sumPaymentTotalTipPercent).toBeInstanceOf(Number);
    expect(sumPaymentTotalTipPercent).toEqual(30);
  });

  it('should get a whole number value from calculateTipPercent function', function () {
    let tipPercent1 = calculateTipPercent(
      allPayments.payment1.billAmt,
      allPayments.payment1.tipAmt,
    );
    let tipPercent2 = calculateTipPercent(
      allPayments.payment2.billAmt,
      allPayments.payment2.tipAmt,
    );

    expect(Number.isInteger(tipPercent1)).toBeTrue();
    expect(tipPercent1).toBe(20);

    expect(Number.isInteger(tipPercent2)).toBeTrue();
    expect(tipPercent2).toBe(10);
  });

  // I get errors with the following test which is a combo of what I had and the solution. 
  // it('should append td element to tr element with the appendTd function', function () {
  //   let newTr = document.createElement('tr');
  //   appendTd(newTr, 'Bob');

  //   expect(newTr.children.length).toEqual(1);
  //   expect(newTr.firstChild.innerHtml).toEqual('Bob');
  // });

  afterEach(function () {
    allPayments = {};
  });
});
