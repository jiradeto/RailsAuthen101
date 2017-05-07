require 'test_helper'

class Web::HomepagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get web_homepages_index_url
    assert_response :success
  end

end
