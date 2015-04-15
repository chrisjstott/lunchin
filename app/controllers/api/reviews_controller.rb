module Api
  class ReviewsController < ApplicationController
    def create

    end

    private
      params.require(:review).permit(:rating, :body)
  end
end
