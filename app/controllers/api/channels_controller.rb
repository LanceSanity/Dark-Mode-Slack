class Api::ChannelsController < ApplicationController
    before_action :require_signed_in

    def index
        @channels = Channel.all
    end

    def show
        @channel = Channel.find(params[:id])
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render json: @channel
        end
    end

    private

    def channel_params
        params.require(:channel).permit(:channel_name)
    end
end
