<template>
  <div class="body_style">
    <div class="card border-gradient-purple">
      <div class="card-header">
        <h2>Amount of money</h2>
        <p><span>50,000</span> VND</p>
      </div>
      <div class="card-body">
        <button class="qr_btn">Save QR code</button>
        <img src="https://i.imgur.com/JpA66EI.jpeg" alt="#" />
        <h4>Remaining PAYMENT TIME</h4>
        <P>102</P>
      </div>
    </div>
  </div>
  <div class="bank_style">
    <div class="card border-gradient-qr">
      <img src="../assets/Logo/VNMOMO.png" alt="" />
      <img src="../assets/Logo/HDB.png" alt="" />
      <img src="../assets/Logo/viettel.png" alt="" />
      <img src="../assets/Logo/unnamed.png" alt="" />
      <img src="../assets/Logo/vnpt.png" alt="" />
      <img src="../assets/Logo/Logo_MB.png" alt="" />
      <img src="../assets/Logo/tpb.png" alt="" />
      <img src="../assets/Logo/Vietinbank.png" alt="" />
      <img src="../assets/Logo/scb.webp" alt="" />
      <img src="../assets/Logo/acb.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.border-gradient-purple {
  box-sizing: border-box;
  background: none;
  border-width: 3px;
  border-style: solid;
  border-color: bisque;
  box-shadow: 1px 5px 27px -4px rgba(247, 247, 247, 0.75);
  -webkit-box-shadow: 1px 5px 27px -4px rgba(247, 245, 245, 0.75);
  -moz-box-shadow: 1px 5px 27px -4px rgba(237, 232, 232, 0.75);
  //   border-image: linear-gradient(#f6b73c, #c47322) 2;

  border-radius: 8px;
}
.card-header {
  background-color: rgb(25, 48, 117);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px !important;
  & h2 {
    margin-bottom: 0;
  }
  & p {
    font-size: 30px;
    margin-bottom: 0;
    span {
      color: rgb(236, 42, 35);
      font-weight: bold;
    }
  }
}
.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  & .qr_btn {
    display: block;
    outline: 0;
    border: 0;
    background-image: linear-gradient(to right, #e052a0, #f15c41);
    cursor: pointer;
    border-radius: 2px;
    color: #fff;
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;
    line-height: 36px;
    font-size: 16px;
    border-radius: 20px;
    padding: 5px 80px;
    margin-bottom: 20px;
    &:hover {
      opacity: 0.8;
    }
  }
  img {
    width: 200px;
    margin-bottom: 20px;
  }
  p {
    color: rgb(236, 42, 35);
    font-weight: bold;
    font-size: 20px;
  }
}
.bank_style {
  margin-top: 10px;
  img {
    width: auto;
    height: auto;
    max-width: 100px;
    max-height: 100%;
    margin: 30px;
  }
}
.border-gradient-qr {
  padding: 20px 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  //   flex: 100%;
  box-sizing: border-box;
  background: none;
  border-width: 3px;
  border-style: solid;
  border-color: bisque;
  box-shadow: 1px 5px 27px -4px rgba(247, 247, 247, 0.75);
  -webkit-box-shadow: 1px 5px 27px -4px rgba(247, 245, 245, 0.75);
  -moz-box-shadow: 1px 5px 27px -4px rgba(237, 232, 232, 0.75);
  //   border-image: linear-gradient(#f6b73c, #c47322) 2;
  border-radius: 8px;
}
</style>
