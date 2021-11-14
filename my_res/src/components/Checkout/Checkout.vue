<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Giỏ hàng của bạn</span>
                    <span class="badge badge-secondary badge-pill"></span>
                </h4>
                <ul class="list-group mb-3 sticky-top">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Sản phẩm 1</h6>
                            <small class="text-muted">Mô tả</small>
                        </div>
                        <span class="text-muted">20.000 đ</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Sản phẩm 2</h6>
                            <small class="text-muted">Mô tả</small>
                        </div>
                        <span class="text-muted">20.000 đ</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 class="my-0">Sản phẩm 3</h6>
                            <small class="text-muted">Mô tả</small>
                        </div>
                        <span class="text-muted">20.000 đ</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span>Tổng tiền (VNĐ)</span>
                        <strong>60.000 đ</strong>
                    </li>
                </ul>
                <form class="card p-2">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Mã giảm giá">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-secondary">Đổi</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-8 order-md-1">
                <h4 class="mb-3">Địa chỉ thanh toán</h4>
                <form class="needs-validation" novalidate="">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName">Tên</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
                            <div class="invalid-feedback"> Yêu cầu tên hợp lệ ! </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName">Họ</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
                            <div class="invalid-feedback"> Yêu cầu họ hợp lệ ! </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="username">Tên đăng nhập</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">@</span>
                            </div>
                            <input type="text" class="form-control" id="username" placeholder="Username" required="">
                            <div class="invalid-feedback" style="width: 100%;"> Yêu cầu tên đăng nhập ! </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="email">Email<span class="text-muted">(Tùy chọn)</span></label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com">
                        <div class="invalid-feedback"> Hãy điền địa chỉ email hợp lệ để nhận hàng </div>
                    </div>
                    <div class="mb-3">
                        <label for="address">Địa chỉ</label>
                        <input type="text" class="form-control" id="address" placeholder="Đường, Quận" required="">
                        <div class="invalid-feedback"> Hãy điền địa chỉ hợp lệ </div>
                    </div>
                    <div class="mb-3">
                        <label for="address2">Địa chỉ 2<span class="text-muted">(Tùy chọn)</span></label>
                        <input type="text" class="form-control" id="address2" placeholder="Số nhà, phường">
                    </div>
                    <div class="row">
                        <div class="col-md-5 mb-3">
                            <label for="country">Tỉnh</label>
                            <select class="custom-select d-block w-100" id="country" required="">
                                <option value="">Chọn...</option>
                                <option>Hà nội</option>
                                <option>TP.HCM</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="state">Quận, Huyện</label>
                            <select class="custom-select d-block w-100" id="state" required="">
                                <option value="">Chọn...</option>
                                <option>Thủ đức</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="zip">Mã bưu chính</label>
                            <input type="text" class="form-control" id="zip" placeholder="" required="">
                            <div class="invalid-feedback"> Yêu cầu mã bưu chính ! </div>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="same-address">
                        <label class="custom-control-label" for="same-address">Địa chỉ giao hàng của tôi giống với địa chỉ thanh toán</label>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="save-info">
                        <label class="custom-control-label" for="save-info">Lưu thông tin cho lần đặt hàng sau</label>
                    </div>
                    <hr class="mb-4">
                    <h4 class="mb-3">Thanh toán</h4>
                    <div class="d-block my-3">
                        <div class="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                            <label class="custom-control-label" for="credit">Thẻ ngân hàng</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                            <label class="custom-control-label" for="debit">Ví điện tử</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">
                            <label class="custom-control-label" for="paypal">Thanh toán khi nhận hàng</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="cc-name">Tên trên thẻ</label>
                            <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                            <small class="text-muted">Tên đầy đủ được ghi trên thẻ</small>
                            <div class="invalid-feedback"> Yêu cầu tên hợp lệ ! </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="cc-number">Số thẻ</label>
                            <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                            <div class="invalid-feedback"> Yêu cầu số thẻ hợp lệ ! </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 mb-3">
                            <label for="cc-expiration">Ngày hết hạn</label>
                            <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                            <div class="invalid-feedback"> Yêu cầu ngày hết hạn hợp lệ ! </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="cc-cvv">CVV</label>
                            <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                            <div class="invalid-feedback"> Yêu cầu CVV hợp lệ </div>
                        </div>
                    </div>
                    <hr class="mb-4">
                    <button class="btn btn-primary btn-lg btn-block" type="submit">Tiếp tục thanh toán</button>
                </form>
            </div>
        </div>
        <footer class="my-5 pt-5 text-muted text-center text-small">
            <p class="mb-1">© 2020 - 2022 Nhà hàng Món Việt</p>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Quyền riêng tư</a></li>
                <li class="list-inline-item"><a href="#">Điều khoản</a></li>
                <li class="list-inline-item"><a href="#">Hỗ trợ</a></li>
            </ul>
        </footer>
    </div>
</template>

<script>
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())
</script>

<style scoped>
    .container {
        max-width: 960px;
    }

    .lh-condensed { line-height: 1.25; }

    button[type="submit"] {
        background-color: rgb(224, 57, 57);
        color: white;
    }

    button[type="submit"]:hover {
        background-color: #aa3a3a;
    }
</style>
