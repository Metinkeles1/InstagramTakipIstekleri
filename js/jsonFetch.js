const follow_requests = fetch("Json/followers_and_following/pending_follow_requests.json")
    .then(cevap => cevap.json());