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
      
      if !!params[:time] && params[:time] != 'null' && params[:time] != 'today'
        time = Time.at(params[:time].to_i)
        @openings = Opening.where("start_time < :time AND end_time > :time", time: time).near(location)
      else
        @openings = Opening.where(
          "end_time > :start_of_day AND start_time < :end_of_day",
          start_of_day: Time.now.beginning_of_day,
          end_of_day: Time.now.end_of_day
        ).near(location)
      end


      render :index
    end

    private
      def opening_params
        params.require(:opening).permit(:start_time, :end_time, :location, :business_id)
      end
  end
end
