class HomeController < ApplicationController

  def index
    @stream = Shoutout::Stream.new("http://rosetta.shoutca.st:9233/stream")
    @stream.connect
  end

end
