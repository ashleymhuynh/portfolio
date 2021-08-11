class AdminController < ApplicationController
   before_action :authorize_request, only: [:verify]

  def create
    admin = Admin.new(admin_register_params)
    if admin.save
      token = create_token(admin.id)
      render json: {
        admin: admin.attributes.except("password_digest"),
        token: token,
      }, status: :created
    else
      render json: admin.errors, status: 422
    end
  end

  # POST /admin/login
  def login
    admin = Admin.find_by(email: admin_login_params[:email])

    if admin && admin.authenticate(admin_login_params[:password])
      token = create_token(admin.id)
      render json: {
        admin: admin.attributes.except("password_digest"),
        token: token,
      }, status: :ok
    else
      render json: {error: "unauthorized"}, status: :unauthorized
    end
  end

  # GET /admin/verify
  def verify
    render json: @current_admin.attributes.except("password_digest"), status: :ok
  end

  private
  def admin_register_params
    params.require(:admin).permit(:name, :email, :password)
  end

  def name_login_params
    params.require(:name).permit(:email, :password)
  end

  def create_token(admin_id)
    payload = {id: admin_id, exp: 24.hours.from_now.to_i}
    JWT.encode(payload, SECRET_KEY)
  end

end
