class PhotosController < ApplicationController
  respond_to :html, :json

  def new
    respond_with Photo.new
  end

  def index
    respond_with Photo.all
  end

  def show
    respond_with Photo.find(params[:id])
  end

  def create
    respond_with Photo.create(params[:pony])
  end

  def update
    respond_with Pony.update(params[:id], params[:pony])
  end

  def destroy
    respond_with Pony.destroy(params[:id])
  end

end