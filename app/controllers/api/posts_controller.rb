class Api::PostsController < ApplicationController

  def index
    @posts = Post.all.reverse
    render json: @posts.to_json
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

end