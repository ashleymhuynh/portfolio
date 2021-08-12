class AdminsController < ApplicationController
  before_action :get_admin, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:verify]

  def index
    admins = Admin.all
    render json: admins
  end

  def show 
    render json: @admin, include: :projects
  end

  def create
    admin = Admin.new(admin_params)
    if admin.save
      token = create_token(admin.id)
      render json: {
        admin: admin.attributes.except("password_digest"),
        token: token,
      }, status: :created
    else
      render json: admin.errors, status: :unprocessable_entity 
    end
  end
  
  def update 
    if admin.update(admin_params)
      render json: @admin
    else 
      render json: @admin.errors 
    end
  end

  def destroy
    @admin.destroy
    render json: "Delete"
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
  
  def admin_params
    params.require(:admin).permit(:name, :email, :password)
  end

  def admin_login_params
    params.require(:admin).permit(:email, :password)
  end

  def create_token(admin_id)
    payload = {id: admin_id, exp: 24.hours.from_now.to_i}
    JWT.encode(payload, SECRET_KEY)
  end

  def get_admin
    @admin = Admin.find(params[:id])
  end

end
