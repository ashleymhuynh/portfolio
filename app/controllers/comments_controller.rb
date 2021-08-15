class CommentsController < ApplicationController
  before_action :authorize_request, only: [:update, :destroy]

  def index
    comments = Comments.all
    render json: comments
  end

  def show
    @comment = Comments.find(params[:id])
    render json: @comment
  end

  def create
    comment = Comments.new(comment_params)
    if comment.save
      render json: comment, status: :created
    else
      render json: comment.errors, status: :unprocessable_entity
    end
  end

  def update
    @comment = Comments.find(params[:id])
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comments.find(params[:id])
    @comment.destroy
    render json: "DELETED"
  end


  private
  def comment_params
    params.require(:comment).permit(:name, :content, :is_approved)
  end

  def get_comment
    @comment = Comments.find(params[:id])
  end

end
