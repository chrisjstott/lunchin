module Api
  class OpeningsController < ApplicationController

    def create
      @opening = Opening.new(opening_params)

      if @opening.save
        render json: @opening
      else
        render json: @opening.errors.full_messages,
               status: :unprocessable_entity
      end
    end

    def index
      if !!params[:search]
        if params[:search].include? ','
          query = params[:search]
          @openings = Opening.near("#{query}")
        else
          query = "#{params[:search]}, San Francisco"
          @openings = Opening.near(query)
        end
      else
        @openings = Opening.all
      end

      render :index
    end

    private
      def opening_params
        params.require(:opening).permit(:start_time, :end_time, :location, :business_id)
      end
  end
end
