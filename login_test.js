const { I } = inject()
const cpfName = require('./utils/cpf_test.js')
const soma = require('./utils/cpf_test.js')

Feature ('Login');

BeforeSuite ( ()  => {
  console.log(cpfName.cpfName())
  console.log(soma.soma(1,2))
})

Before ( ()  => {
  I.amOnPage('/')
})

After ( ()  => {
  console.log('After')
})

AfterSuite ( ()  => {
  console.log('Depois de tudo')
})

Scenario('Login com sucesso',  ({ I }) => {
  I.amOnPage('http://automationpratice.com.br');
  I.click('Login')
  I.waitForText('Login', 10)
  I.fillField('#user', 'something@totest.com')
  I.fillField('#password', '123456')
  I.forceClick('#btnLogin')
  I.waitForText('Login realizado', 3)

});
