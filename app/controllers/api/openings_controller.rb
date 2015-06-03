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
      if !!params[:location]
        location = params[:location]
        location += ", San Francisco" unless location.include? ','
      else
        location = "San Francisco"
      end
      
      if params[:time] == 'null' || params[:time] == 'now'
        time = Time.now
      elsif !!params[:time]
        time = Time.at(params[:time].to_i)
      else
        time = Time.now
      end

      @openings = Opening.where("start_time < :time AND end_time > :time", time: time).near(location)

      render :index
    end

    private
      def opening_params
        params.require(:opening).permit(:start_time, :end_time, :location, :business_id)
      end
  end
end
