class EndorsmentsController < ApplicationController
  before_action :authorize_request, only: [:index, :show, :update, :destroy]

  def index
    endorsments = Endorsments.all
    render json: endorsments
  end

  def show
    @endorsment = Endorsment.find(params[:id])
    render json: @endorsment
  end

  def create
    endorsment = Endorsment.new(endorsment_params)
    if endorsment.save
      render json: endorsment, status: :created
    else
      render json: endorsment.errors, status: :unprocessable_entity
    end
  end

  def update
    @endorsment = Endorsment.find(params[:id])
    if endorsment.update(endorsment_params)
      render json: @endorsment
    else
      render json: @endorsment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @endorsment = Endorsment.find(params[:id])
    @endorsment.destroy
    render json: "DELETED"
  end


  private
  def endorsment_params
    params.require(:endorsment).permit(:name, :content)
  end

  def get_endorsment
    @endorsment = Endorsment.find(params[:id])
  end

end
