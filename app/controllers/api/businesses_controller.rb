module Api
  class BusinessesController < ApplicationController

    def create
      @business = Business.new(business_params)

      if @business.save
        render json: @business
      else
        render json: @business.errors.full_messages,
               status: :unprocessable_entity
      end
    end

    def show
      @business = Business.find(params[:id])
      if @business
        render :show
      else
        render json: "Page not found", status: 404
      end
    end

    def index
      if params[:search]
        search_term = params[:search][:search_term]
        @businesses = Business.where("name LIKE ?", "%#{search_term}%")
      else
        @businesses = Business.all
      end

      render json: @businesses
    end

    private
      def business_params
        params.require(:business).permit(:owner_id, :name)
      end

      def search_parms
        params.require(:search).permit(:search_term)
      end
  end

end
