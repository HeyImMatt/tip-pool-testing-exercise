describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the ServerTable with server and earnings', function () {
    updateServerTable();

    expect(serverTbody.firstElementChild.firstElementChild.textContent).toEqual('Alice');
    expect(serverTbody.firstElementChild.firstElementChild.nextSibling.textContent).toBeInstanceOf(String);
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.remove('tr');
    serverNameInput.value = '';
  });
});
